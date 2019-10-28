import React,{Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
// import Input from '/src/ui/Input/'

class InputNumber extends Component {
	constructor(props){
		super(props)
		this.state = {
			focus: false,
			innerValue: '',
			value:this.props.value
		}
	}
	static propTypes = {
		value: PropTypes.string,
		onChange: PropTypes.func,
		size:PropTypes.string,
	}

	static defaultProps = {
		size: 'middle',
		onChange: () => {}
	}

	get isControl(){
		return 'value' in this.props
	}

	get value() {
		console.log(this.isControl);
		if(this.isControl){
			return this.state.value
		} else {
			return this.state.innerValue
		}
	}


	render() {
		const {
			focus
		} = this.state
		const {
			children,
			size,
			prefix,
			suffix,
			onChange,
			rule= new RegExp(),
			message,
			...rest

		} = this.props
		let cls = classNames({
			input: true,
			focus,
		})
		return (
			<div>
			<div className={cls}>
				<input
					value={this.value}

					onFocus={e => {
						this.setState({focus: true
						})
					}}
					onBlur={e => {
						this.setState({focus: false
						})
					}}
					onChange={(e) => {
						if(!this.isControl){
							this.setState({
								innerValue: e.target.value
							})
						}else{
							this.setState({
								value: e.target.value
							})
						}
						this.props.onChange(e)
					}}
				/>

			</div>
			</div>
		)
	}

	componentDidMount() {
		this.setState({
			innerValue: this.props.defaultValue
		})
	}

}

export default InputNumber;
