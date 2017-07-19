import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  '**': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'body': {
    'textAlign': 'center',
    'fontFamily': 'Helvetica, Arial, sans-serif',
    'fontSize': [{ 'unit': '%V', 'value': 1 }]
  },
  'header': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative'
  },
  'section': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative'
  },
  'footer': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative'
  },
  'ct-footer': {
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'width': [{ 'unit': '%H', 'value': 1 }]
  },
  'header': {
    'background': '#ff071a'
  },
  'footer': {
    'background': '#ff071a'
  },
  'row': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'position': 'relative'
  },
  'row-input': {
    'marginBottom': [{ 'unit': 'px', 'value': 15 }]
  },
  'center': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'textAlign': 'center'
  },
  'form-login': {
    'borderRadius': '5px',
    'padding': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 20 }],
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff071a' }]
  },
  'form-login input[type='text']': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#b3b3b3' }],
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'textAlign': 'left',
    'height': [{ 'unit': 'px', 'value': 55 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'position': 'relative',
    'color': '#b3b3b3',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'form-login input[type='password']': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#b3b3b3' }],
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'textAlign': 'left',
    'height': [{ 'unit': 'px', 'value': 55 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'position': 'relative',
    'color': '#b3b3b3',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'form-login button': {
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ff071a' }],
    'background': '#ff071a',
    'borderRadius': '3px',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'boxSizing': 'border-box',
    'textAlign': 'center',
    'height': [{ 'unit': 'px', 'value': 50 }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'float': 'left',
    'position': 'relative',
    'color': '#ffffff',
    'fontSize': [{ 'unit': 'px', 'value': 14 }],
    'fontWeight': 'bold',
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'cursor': 'pointer',
    'transition': 'all .2s ease'
  },
  'form-login button:hover': {
    'background': '#ffffff',
    'color': '#ff071a'
  },
  'form-login h6': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'color': '#ff071a',
    'margin': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }]
  },
  'form-login esqueci-senha': {
    'float': 'left',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 13 }],
    'color': '#ff071a',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 0 }],
    'textDecoration': 'none'
  },
  'form-login esqueci-senha:hover': {
    'textDecoration': 'underline'
  },
  '::-webkit-input-placeholder': {
    'color': '#b3b3b3'
  },
  '::-moz-placeholder': {
    'color': '#b3b3b3'
  },
  ':-ms-input-placeholder': {
    'color': '#b3b3b3'
  },
  ':-moz-placeholder': {
    'color': '#b3b3b3'
  },
  'box-login': {
    'float': 'left',
    'margin': [{ 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'px', 'value': 0 }]
  },
  'footer img': {
    'width': [{ 'unit': 'px', 'value': 400 }],
    'display': 'inline-block',
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }]
  }
});
