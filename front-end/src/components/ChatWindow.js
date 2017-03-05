import React from 'react';
import MessageList from './MessageList';
import MessageInput from './InputMessage';

const ChatWindow = (props) =>(
	<div className="chat-window">
		<div className="row">
			<div className="col-xs-12 col-sm-8 col-sm-offset-2">
				<div className="panel panel-default">
            	    <div className="panel-body">
						<MessageList pesans = {props.messages}/>
					</div>
					<div className="panel-footer">
						<MessageInput 
							onMessageSubmit={
								props.onMessageSubmit
							}
						/>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ChatWindow;