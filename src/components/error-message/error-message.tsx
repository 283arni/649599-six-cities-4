import * as React from 'react';
import {messageType} from '../../types/message';

interface Props {
  messageServer: messageType;
}

const ErrorMessage: React.FunctionComponent<Props> = ({messageServer}: Props) => {
  return (
    <div className="error" style={{
      minWidth: `300px`,
      fontSize: `1.5rem`,
      padding: `10px`,
      textAlign: `center`,
      color: `pink`,
      border: `2px solid pink`,
      borderRadius: `3px`,
      backgroundColor: `red`,
      position: `fixed`,
      zIndex: 100,
      top: `20px`,
      left: `50%`,
      transform: `translateX(-50%)`
    }}
    >
      {`${messageServer.data.error} Status: ${messageServer.status}`}
    </div>
  )
}

export default ErrorMessage;
