
import react from '@vitejs/plugin-react';

export default {
    plugins: [react()],
    server: {
      proxy: {
        '/': 'http://localhost:8560',
      },
    },
  };
