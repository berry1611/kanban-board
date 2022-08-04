import TypographyMUI from '@mui/material/Typography';

const Typography = (props) => {
  const { children, component, variant, sx } = props;
  return (
    <TypographyMUI component={component} variant={variant} sx={{ fontFamily: 'Nunito Sans', fontWeight: '400px', fontSize: '12px', ...sx }}>
      {children}
    </TypographyMUI>
  );
};

export default Typography;
