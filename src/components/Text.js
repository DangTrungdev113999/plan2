import styled from 'styled-components';

const Text = styled.Text`
  font-size: ${({theme}) => theme.typo.font}px;
  ${({thin}) => thin && 'font-weight: 100;'}
  ${({light}) => light && 'font-weight: 300;'}
  ${({semibold}) => semibold && 'font-weight: 500;'}
  ${({bold}) => bold && 'font-weight: 700;'}
  ${({extraBold}) => extraBold && 'font-weight: 900;'}
  ${({weight}) => weight && `font-weight: ${weight};`}
  ${({m}) => m && `margin: ${m};`}
  ${({p}) => p && `padding: ${p};`}
  ${({size}) => size && `font-size: ${size}px;`}
  ${({height}) => height && `line-height: ${height}px;`}
  ${({color, theme}) =>
    theme.colors[color] ? `color: ${theme.colors[color]}` : `color: ${color}`}
  ${({italic}) => italic && 'font-style: italic;'}
  ${({h1, theme}) =>
    h1 &&
    `
    font-size: ${theme.typo.h1.size}px;
  `}
  ${({h2, theme}) =>
    h2 &&
    `
    font-size: ${theme.typo.h2.size}px;
  `}
  ${({h3, theme}) =>
    h3 &&
    `
    font-size: ${theme.typo.h3.size}px;
  `}
  ${({p, theme}) =>
    p &&
    `
    font-size: ${theme.typo.p.size}px;
  `}
  ${({body, theme}) =>
    body &&
    `
    font-size: ${theme.typo.body.size}px;
  `}
  ${({caption, theme}) =>
    caption &&
    `
    font-size: ${theme.typo.caption.size}px;
  `}
  ${({center}) =>
    center &&
    `s
    text-align: center;
  `}
  ${({right}) =>
    right &&
    `
    align-self: flex-start;
    text-align: right;
  `}
  ${({left}) =>
    left &&
    `
    align-self: flex-end;   
    text-align:  left;
  `}  
`;

export default Text;
