import { theme } from '@/lib/theme';
import { useTheme } from 'next-themes';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props =>
    props.color === theme.red.color ? theme.red.background :
      props.color === theme.black.color ? theme.black.background : theme.blue.background};
  color: ${props =>
    props.color === theme.red.color ? theme.red.color :
      props.color === theme.black.color ? theme.black.color : theme.blue.color};
`

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div>
      <StyledButton
        color={theme}
        className='mr-2 px-2 rounded-lg'
        onClick={() => setTheme('red')}
      >
        Red/Black
      </StyledButton>
      <StyledButton
        color={theme}
        className='mr-2 px-2 rounded-lg'
        onClick={() => setTheme('blue')}
      >
        Blue/White
      </StyledButton>
      <StyledButton
        color={theme}
        className='mr-2 px-2 rounded-lg'
        onClick={() => setTheme('gold')}
      >
        Black/Gold
      </StyledButton>
    </div>
  );
};

export default ThemeToggle;
