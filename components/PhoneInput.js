import { Component } from 'react'
import Phone from 'react-phone-number-input'

class PhoneInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			phone: '',
		}
	}

	handleChange(phone) {
		this.setState({phone: phone})
		console.log('phoneinput', phone)
		this.props.onChange(phone)
	}

	render() {
		const phoney = this.state.phone
		return (
			<div className="phone-input-wrapper">
			<Phone
		placeholder="Your phone number"
		value={ phoney }
		country="US"
		nativeExpanded={true}
		onChange={ phone => this.handleChange(phone) } />

		<style jsx global>{`

@media (max-width: 550px) {
	.phone-input-wrapper {
		width: 100%;
	}
}

.rrui__input-field,
.rrui__select__button
{
	border        : none;
	border-bottom : 1px solid #C5D2E0;
	transition    : border 0.1s;
}

.rrui__input-field:focus,
.rrui__select__button:focus,
.rrui__select__native-expanded:focus + .rrui__select__button
{
	border-bottom-color: #03B2CB;
}

/*===========================================================
= Input                                                     =
===========================================================*/

.rrui__input
{
	position : relative;
}

.rrui__input:not(.rrui__input--multiline),
.rrui__input-label
{
	// height : calc(0.3rem * 6);
}

.rrui__select__native
{
	min-height : calc(0.3rem * 6);
	width: 52px;
  height: 64px;
  transformX: scale(3);
}

.rrui__input-error
{
	margin-top : calc(0.3rem);
	color      : #D30F00;
}

/*===========================================================
= Input field                                               =
===========================================================*/

.rrui__input-field
{
	outline       : none;
	border-radius : 0;
	/* Some web browsers add <input/> padding by default */
	padding       : 0;
	appearance    : none;
  width: 220px;
  font-size: 18px;
  padding: 18px 20px;
  color: #333;
  font-weight: 500;
  border: none;
  // box-shadow: rgba(63,63,63,0.09) 0 6px 34px 0;
  border-radius: 4px;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-size: 18px;
  color: #333;
  font-weight: 500;
}

.rrui__input-field--invalid,
.rrui__input-field--invalid:focus
{
	border-color: #EB2010;
}

.rrui__input-field--disabled
{
	cursor: default;
}

/*===========================================================
= Buttons                                                   =
===========================================================*/

.rrui__select__button,
.rrui__select__option,
.rrui__select__close
{
	margin      : 0;
	padding     : 0;
	white-space : nowrap;
	outline     : none;
	appearance  : none;
	border      : none;
	background  : none;
	cursor      : pointer;
	font-size   : inherit;
	font-family : inherit;
	font-weight : inherit;
	font-style  : inherit;
}

/*===========================================================
= Select                                                    =
===========================================================*/

.rrui__expandable
{
	opacity : 0;
	pointer-events : none;

	transform        : scaleY(0);
	transform-origin : 50% top 0px;

	/* 250ms - too slow for short lists */
	transition : all 150ms cubic-bezier(.76,.04,.46,.75) 0ms;

	/* prevent white background showing through the transparent border */
	/* http://stackoverflow.com/questions/7473200/transparent-border-expands-background-color-image */
	background-clip         : padding-box;
	-webkit-background-clip : padding-box;
}

.rrui__expandable--expanded
{
	opacity        : 1;
	pointer-events : auto;

	transform        : scaleY(1);
	transform-origin : 50% top 0px;

	transition : all 150ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
}

.rrui__expandable--overlay
{
	position : absolute;
	z-index  : 1;
}

.rrui__expandable__content
{
	/*
	(it fades in and out by itself too).
	This is done to fade out the inner block when the dropdown is collapsed
	therefore hiding an otherwise bizarre and unwanted visual clutter
	*/
	opacity: 0;

	/* Mitigates inner content overlapping with itself creating a feeling of a mess */
	transition: opacity 150ms ease-out;
}

.rrui__expandable__content--expanded
{
	opacity: 1;
}

.rrui__shadow
{
	box-shadow : 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}

.rrui__select
{
	user-select : none;
}

.rrui__select--menu
{
	position : relative;
}

.rrui__select__options
{
	margin           : 0;
	padding-left     : 0;
	padding-top      : calc(2 * 0.3rem);
	padding-bottom   : calc(2 * 0.3rem);
	overflow-y       : auto;
	background-color : white;
	list-style-type  : none;
	overflow-x       : hidden;
	box-sizing       : border-box;
}

.rrui__expandable--left-aligned
{
	left : 0;
}

.rrui__expandable--right-aligned
{
	right : 0;
}

.rrui__select__options--left-aligned
{
	left : calc(0.3rem * 4 * -1);
}

.rrui__select__options--right-aligned
{
	right : calc(0.3rem * 4 * -1);
}

.rrui__select__options:not(.rrui__select__options--menu)
{
	width : calc(100% + 0.3rem * 4 * 2);
}

.rrui__select__options--downward
{
	/* When an html page is overflown by a long list
	   then this bottom margin helps to see that
	   there's no more options left out being clipped or something */
	margin-bottom : 1em;
}

.rrui__select__options--upward
{
	bottom : 100%;

	/* When an html page is overflown by a long list
	   then this bottom margin helps to see that
	   there's no more options left out being clipped or something */
	margin-top : 1em;
}

.rrui__select__option
{
	display : block;
	width   : 100%;

	padding-left  : calc(0.3rem * 4);
	padding-right : calc(0.3rem * 4);

	padding-top    : calc(0.3rem * 1);
	padding-bottom : calc(0.3rem * 1);

	box-sizing  : border-box;
	text-align  : left;
	white-space : nowrap;
}

.rrui__select__option:hover
{
	background-color : #FBFDFD;
}

.rrui__select__button--disabled,
.rrui__select__option--disabled
{
	cursor : default;
}

.rrui__select__option-icon
{
	margin-right : calc(0.3rem * 3);
}

.rrui__select__options--upward
{
	transform-origin: 50% bottom 0px;
}

.rrui__select__option--focused
{
	background-color: #ECF1F6;
}

.rrui__select__option--focused:hover
{
	background-color: #EFF3F8;
}

.rrui__select__option:active
{
	background-color : #3678D1;
	color            : white;
}

.rrui__select__option-icon
{
	margin-right: 0.5em
}

.rrui__select__toggler,
.rrui__select__button,
.rrui__select__autocomplete
{
	height     : 100%;
	box-sizing : border-box;
}

.rrui__select__button
{
	transition    : border 0.1s;

	text-align : left;
	height: 65px;
  width: 20px;
  margin-left: 20px;
}

.rrui__select__button:focus,
.rrui__select__native-expanded:focus + .rrui__select__button
{
	border-bottom-color: #03B2CB;
}

.rrui__select__button:active
{
	color: #03B2CB;
}

.rrui__select__button--expanded
{
	color: #3678D1;
}

.rrui__select__button--empty
{
	color: #888C91;
}

.rrui__select__button,
.rrui__select__option
{
	color : inherit;
}

.rrui__select__button
{
	transition : color 30ms ease-out;
}

.rrui__select__selected-content
{
	display     : flex;
	align-items : center;
}

.rrui__select__selected-label
{
	flex          : 1 0 auto;
	overflow      : hidden;
	text-overflow : ellipsis;
}

.rrui__select__arrow
{
	width  : 0;
	height : 0;

	margin-left   : 0.35em;
	margin-top    : 0.1em;
	margin-bottom : 0.1em;

	opacity: 0.7;

	transition: opacity 100ms ease-out;

	/* border-width: arrow_height arrow_width/2 0 arrow_width/2 */
	border-width : 0.35em 0.2em 0 0.2em;

	border-style       : solid;
	border-left-color  : transparent;
	border-right-color : transparent;

	color: #B8BDC4;
}

.rrui__select__arrow--expanded
{
	opacity: 0.3;
}

.rrui__select__native-expanded
{
	position : absolute;
	left     : 19px;
	z-index  : 1;
	opacity  : 0;
	cursor   : pointer;
}

.rrui__select__close
{
	display      : block;
	*/
	display      : none;
	position     : fixed;
	top          : 0;
	right        : 0;
	z-index      : 1;
}

.rrui__select__close-icon
{
	margin-top   : calc(0.3rem * 2 + 4px);
	margin-right : calc(0.3rem * 2 + 4px);
	width        : calc(0.3rem * 5);
	height       : calc(0.3rem * 5);
}

.react-phone-number-input__row
{
	position    : relative;

	/* This is done to stretch the contents of this component */
	display     : flex;
	align-items : center;
	box-shadow: rgba(63,63,63,0.09) 0 6px 34px 0;
	height: 63px;
	border-radius: 4px;
}

.react-phone-number-input__country
{
	width : auto;
}

/* The phone number input stretches to fill all empty space */
.react-phone-number-input__phone,
/* The country select, when expanded, stretches to fill all empty space */
.react-phone-number-input__country.rrui__select--expanded
{
	flex : 1;
}

.react-phone-number-input__phone
{
	font-size : 18px;
}

.react-phone-number-input__country.rrui__select--collapsed
{
	margin-right : 0.5em;
}

.react-phone-number-input__country .rrui__select__autocomplete
{
	width : 100%;
}

.react-phone-number-input__country,
.react-phone-number-input__country:not(.react-phone-number-input__country--native-expanded) .rrui__input
{
	
	position : static;
}

.react-phone-number-input .rrui__select__arrow
{
	margin-top  : 0.3em;
	margin-left : 0.3em;
	display: none;
}

.react-phone-number-input .rrui__select__option
{
	display     : flex;
	align-items : center;
}

.react-phone-number-input .rrui__select__option-icon
{
	margin-bottom : 0.1em;
}

.react-phone-number-input__icon
{
	width      : 1.24em;
	// height     : 0.93em;

	// border     : 1px solid rgba(0, 0, 0, 0.25);
	box-sizing : content-box;
}

.react-phone-number-input__icon--international
{
	/* The international icon size is square */
	width         : calc(0.93em + 2px);
	height        : calc(0.93em + 2px);

	padding-left  : 0.155em;
	padding-right : 0.155em;

	border : none;
}

.react-phone-number-input__error
{
	margin-left : calc(1.24em + 2px + 0.3em + 0.35em + 0.5em);
}

.react-phone-number-input__icon-image
{
	max-width  : 100%;
	max-height : 100%;
}
`}
</style>
		</div>
		)
	}

}

export default PhoneInput 
