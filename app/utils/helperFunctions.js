import { maxFileSize } from 'config/index';

export function checkFile(file) {
  if (file.mimeType !== 'image/jpeg' && file.mimeType !== 'image/png' && file.mimeType !== 'application/pdf') {
    return 'Allowed formats JPG, PNG or PDF';
  }
  if (file.size > maxFileSize) {
    return 'Maximum size of 2MB allowed';
  }
  return true;
}
