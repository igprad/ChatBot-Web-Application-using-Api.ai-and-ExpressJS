import React,{PropTypes} from 'react';

const MessageInput = ({onMessageSubmit}) => (	
	<div className="message-input">
		<form 
			className="message-input__form"

			onSubmit={(event) => {
				event.preventDefault();
				// alert(event.target.message.value);
				onMessageSubmit(event.target.message.value);
				event.target.message.value='';
			}}
		>
		  <div className="input-group">
		    <input 
		    	type="text" 
		    	name="message" 
		    	className="form-control" 
		    	autoComplete="off" 
		    	placeholder="Write your message here..."
		    />
		    <span className="input-group-btn">
		      	<button type="submit" className="btn btn-default message-input__submit-button">
		       	 Send
		      	</button>
		   	</span>
		  </div>
		</form>
	</div>
);

MessageInput.propTypes={
	onMessageSubmit: PropTypes.func.isRequired,
}

export default MessageInput;