import App from './App.svelte';
import './index.css';

const targetElement = document.getElementById('root');
if (!targetElement) {
  throw new Error('Target root element was not found in DOM');
}

const app = new App({
  target: targetElement,
});

export default app;
