class Errors {
	constructor(){ this.errors = {} };

	set(errors){
		this.errors = errors;	
	};

	get(field){
		if (this.errors[field]){
			return this.errors[field][0];
		}
	};

	clear(field){
		console.log('here');
		console.log(field);
		delete this.errors[field];
	};
}

export default Errors
