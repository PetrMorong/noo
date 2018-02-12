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

export function getViewingPosition(x) {
  if (x.time.substring(3, 5) === '00') {
    return { top: '2px' };
  } else if (x.time.substring(3, 5) === '20') {
    return { top: '22px' };
  }
  return { top: '42px' };
}
