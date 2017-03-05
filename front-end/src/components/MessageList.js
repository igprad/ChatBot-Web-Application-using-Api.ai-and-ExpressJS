import React from 'react';
import moment from 'moment';

const Message = ({from,body,timeStamp}) => {
	const containerClass =
		from == 'Bot' ? 'message message--bot' : 'message';

	return(
		<div className={containerClass}>
			<div className="message__content">
				<div className = "message__header">
					<strong>{from}</strong>
				</div>
				<div className="mesagge__body">
					{body}
				</div>
				<div className="message_meta">
					{moment(timeStamp).format('HH:MM')}
				</div>
			</div>
		</div>
	);
}

const MessageList = (props)=> (
	<div className="message-list">
		{props.pesans.map((message,i) =>(
		<Message 

			key={i} 
			from={message.author} 
    		body={message.text} 
    		timeStamp={message.createdAt}

    	/>
     	))}
	</div>
);


export default MessageList;