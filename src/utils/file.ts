import { promises as fs } from 'fs';
import { Readable, Writable } from 'stream';

export const getPathFromStream = (stream: Readable | Writable): string => {
  return (stream as any).path;
};

export const getFileSize = async (path: string) => {
  if (!path) return -1;

  const { size } = await fs.stat(path);
  return size;
};
