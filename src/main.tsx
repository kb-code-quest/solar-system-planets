import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initAuth } from './3rd-party-sdk/auth.ts'
import { getFeatureFlagProvider } from './feature-flags/feature-flag-provider.tsx'

(async () => {
  const rootElement = document.getElementById("root")!;

  const root = ReactDOM.createRoot(rootElement);

  const user = await initAuth();

  const featureFlagHoc = await getFeatureFlagProvider({
    context: { key: user },
  });

  const AppWithFL = featureFlagHoc(App);

  root.render(
    <React.StrictMode>
      <AppWithFL />
    </React.StrictMode>
  );
})();
