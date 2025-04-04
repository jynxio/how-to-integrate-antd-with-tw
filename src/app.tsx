import { Center } from './center';
import { Layer } from './layer';

function App() {
  return (
    <Center>
      <Layer token={{ colorBorder: '#e9331f', colorBgBase: '#e9331f33' }}>
        <Layer token={{ colorBorder: '#f4bc2e', colorBgBase: '#f4bc2e33' }}>
          <Layer token={{ colorBorder: '#389ffb', colorBgBase: '#389ffb33' }} />
        </Layer>
      </Layer>
    </Center>
  );
}

export { App };
