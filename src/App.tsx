import { Unity, useUnityContext } from 'react-unity-webgl';
import './App.css';

const App = () => {

  const { unityProvider } = useUnityContext({
    loaderUrl: "UnityBuild/webglTest.loader.js",
    dataUrl: "UnityBuild/webglTest.data.br",
    frameworkUrl: "UnityBuild/webglTest.framework.js.br",
    codeUrl: "UnityBuild/webglTest.wasm.br",
  });

  return (
    <div>
      <Unity unityProvider={unityProvider}></Unity>
    </div>
  );
}


export default App;
