import { FunctionComponent } from 'preact';
import { res } from 'options/utils';
import { model } from 'options/settings-model';
import { ConnectionWeb } from './connection-web';
import { ConnectMode } from './connect-mode';
import { ConnectState } from './connect-state';

const ConnectionBlock: FunctionComponent = () => {
    return (
        <>
            <h2 id="connection">{res('optionsConnection')}</h2>
            <ConnectMode />
            {model.useWebApp ? <ConnectionWeb /> : null}
            <ConnectState />
        </>
    );
};

export { ConnectionBlock };