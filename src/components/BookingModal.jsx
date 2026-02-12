import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCloudUploadAlt, FaCalendarAlt, FaUser, FaIdCard, FaSpinner, FaCheckCircle } from 'react-icons/fa';
import Tesseract from 'tesseract.js';
import { useLanguage } from '../contexts/LanguageContext';
import { sendBookingDetails, uploadImageToImgBB } from '../utils/utils';

const BookingModal = ({ isOpen, onClose, prefilledData = {} }) => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    idFile: null
  });
  const [error, setError] = useState('');
  const [isScanning, setIsScanning] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [scanResult, setScanResult] = useState(null); // 'success' or 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'dob') {
      validateAge(value);
    }
  };

  const validateIdCard = async (file) => {
    setIsScanning(true);
    setScanResult(null);
    setError('');

    try {
      const result = await Tesseract.recognize(
        file,
        'fra', 
      );

      const text = result.data.text.toUpperCase();
      const keywords = ['CARTE NATIONALE', 'ROYAUME DU MAROC', 'IDENTITY CARD', 'CIN', 'PRENOM', 'NOM', 'PASS'];
      
      const isValid = keywords.some(keyword => text.includes(keyword));

      if (isValid) {
        setScanResult('success');
      } else {
        setScanResult('error');
        setError(t('bookingModal.invalidId'));
      }
    } catch (err) {
      console.error("OCR Error:", err);
      // Don't block strictly on OCR error, maybe just warn? 
      // User asked for validation, but upload flow prioritizes the file being present.
      // Let's stick to showing error state but maybe still allowing if user insists? 
      // Current logic blocks.
      setError(t('bookingModal.invalidId'));
      setScanResult('error');
    } finally {
      setIsScanning(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, idFile: file }));
      validateIdCard(file);
    }
  };

  const validateAge = (dateString) => {
    if (!dateString) return false;
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      setError(t('bookingModal.underAgeError'));
      return false;
    } else {
      if (error === t('bookingModal.underAgeError')) setError('');
      return true;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.idFile) {
        setError(t('bookingModal.invalidId')); // Ensure file is present
        return;
    }

    if (validateAge(formData.dob) && (scanResult === 'success' || scanResult === null)) { 
      // Block if explicit OCR error
      if (scanResult === 'error') {
         setError(t('bookingModal.invalidId'));
         return;
      }
      
      setIsUploading(true);
      setError('');

      try {
        let idUrl = '';
        if (formData.idFile) {
            idUrl = await uploadImageToImgBB(formData.idFile);
        }
        
        sendBookingDetails({ ...prefilledData, ...formData, idUrl });
        alert(t('bookingModal.successMessage'));

        // Reset
        setFormData({ fullName: '', dob: '', idFile: null });
        setScanResult(null);
        setError('');
        onClose();

      } catch (err) {
        console.error("Upload failed", err);
        setError(t('bookingModal.uploadError'));
        // Fallback: send without URL if upload fails? Or block?
        // User said: "Generate a WhatsApp message that includes... DIRECT LINK". So blocking seems appropriate or fallback to "Attached".
        // Let's block and ask to try again implies reliability. 
        // But for demo with bad API key, this will fail.
        // I'll add a note in utils.js or fallback there? 
        // I already added throw in utils.js.
        // Let's try to continue gracefully if upload fails? No, requirement 2 is strict.
        alert("Upload failed. Please check API Key or try again."); 
      } finally {
        setIsUploading(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl overflow-hidden border border-gold/20"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neutral-900 to-neutral-800 p-6 flex justify-between items-center border-b border-gold/10">
              <h3 className="text-xl font-playfair font-bold text-gold">
                {t('bookingModal.title')}
              </h3>
              <button
                onClick={onClose}
                className="text-white/60 hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-8 space-y-6" autoComplete="off">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-400">
                  {t('bookingModal.fullName')}
                </label>
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-gold transition-colors" />
                  <input
                    type="text"
                    name="fullName"
                    required
                    autoComplete="new-password"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl py-3 pl-12 pr-4 text-neutral-900 dark:text-white focus:ring-2 focus:ring-gold/50 transition-all placeholder-neutral-400"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Date of Birth */}
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-400">
                  {t('bookingModal.dob')}
                </label>
                <div className="relative group">
                  <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 group-focus-within:text-gold transition-colors" />
                  <input
                    type="date"
                    name="dob"
                    required
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full bg-neutral-100 dark:bg-neutral-800 border-none rounded-xl py-3 pl-12 pr-4 text-neutral-900 dark:text-white focus:ring-2 focus:ring-gold/50 transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* ID Upload */}
              <div className="space-y-2">
                <label className="text-sm uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-400">
                  {t('bookingModal.idScan')}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="id-upload"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label
                    htmlFor="id-upload"
                    className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
                      scanResult === 'success' 
                        ? 'border-green-500 bg-green-500/5'
                        : scanResult === 'error'
                        ? 'border-red-500 bg-red-500/5'
                        : formData.idFile
                        ? 'border-gold bg-gold/5'
                        : 'border-neutral-300 dark:border-neutral-700 hover:border-gold hover:bg-neutral-50 dark:hover:bg-neutral-800'
                    }`}
                  >
                    {isScanning ? (
                      <div className="flex flex-col items-center text-gold animate-pulse">
                        <FaSpinner size={24} className="animate-spin mb-2" />
                        <span className="text-sm font-medium">{t('bookingModal.scanning')}</span>
                      </div>
                    ) : scanResult === 'success' ? (
                       <div className="flex flex-col items-center text-green-500">
                        <FaCheckCircle size={32} className="mb-2" />
                        <span className="text-sm font-medium">{t('bookingModal.scanSuccess')}</span>
                        <span className="text-xs text-neutral-500 mt-1">{formData.idFile?.name}</span>
                      </div>
                    ) : formData.idFile ? (
                      <div className="flex flex-col items-center text-gold">
                        <FaIdCard size={32} className="mb-2" />
                        <span className="text-sm font-medium">{formData.idFile.name}</span>
                         {scanResult === 'error' && <span className="text-red-500 text-xs mt-1 font-bold">Failed to verify</span>}
                      </div>
                    ) : (
                      <div className="flex flex-col items-center text-neutral-400">
                        <FaCloudUploadAlt size={32} className="mb-2" />
                        <span className="text-sm text-center px-4">{t('bookingModal.uploadText')}</span>
                      </div>
                    )}
                  </label>
                </div>
                {error && (
                  <p className="text-red-500 text-xs mt-1 font-medium bg-red-500/10 py-1 px-2 rounded-md inline-block border border-red-500/20">
                    {error}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={!!error || !formData.dob || isScanning || isUploading || (formData.idFile && scanResult === 'error')}
                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all transform flex items-center justify-center gap-2 ${
                  error || !formData.dob || isScanning || isUploading || (formData.idFile && scanResult === 'error')
                    ? 'bg-neutral-300 dark:bg-neutral-700 text-neutral-500 cursor-not-allowed'
                    : 'bg-gold text-neutral-900 hover:scale-[1.02] shadow-lg shadow-gold/20'
                }`}
              >
                {isScanning ? (
                    <>
                       <FaSpinner className="animate-spin" /> {t('bookingModal.scanning')}
                    </>
                ) : isUploading ? (
                    <>
                       <FaSpinner className="animate-spin" /> {t('bookingModal.uploading')}
                    </>
                ) : (
                    t('bookingModal.submit')
                )}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
