import ButtonMUI from '@mui/material/Button';

const Button = (props) => {
  const { children, component, size, variant, sx, ...rest } = props;
  return (
    <ButtonMUI
      component={component}
      size={size}
      variant={variant}
      disableTouchRipple
      disableFocusRipple
      disableRipple
      {...rest}
      sx={{ color: 'black', textTransform: 'capitalize', fontFamily: 'Nunito Sans', fontSize: '12px', fontWeight: '400px', '&:hover': { bgcolor: 'inherit' }, ...sx }}
    >
      {children}
    </ButtonMUI>
  );
};

export default Button;
