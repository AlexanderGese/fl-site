import { useEffect, useState } from 'react';
import settings from '../config/settings.json';

export function useConfig<T>(path: string): T {
  const [value, setValue] = useState<T>(() => {
    return path.split('.').reduce((obj, key) => obj[key], settings as any);
  });

  useEffect(() => {
    // This could be extended to fetch from an API or support live updates
    setValue(path.split('.').reduce((obj, key) => obj[key], settings as any));
  }, [path]);

  return value;
}