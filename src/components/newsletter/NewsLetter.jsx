import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import { CssVarsProvider } from '@mui/joy/styles';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import classes from './NewsLetter.module.css';

const NewsLetter = () => {
  const [data, setData] = React.useState({
    email: '',
    status: 'initial',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: 'loading' }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: '', status: 'sent' });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: 'failure' }));
    }
  };

  return (
    <CssVarsProvider>
    <form className={classes.form} onSubmit={handleSubmit} id="demo">
      <FormControl>
        <h2 className={classes.heading}>Newsletter</h2>
        <p className={classes.paragraph}>Subscribe to our newsletter for latest updates</p>
        <Input
          sx={{ '--Input-decorator-childHeight': '45px' }}
          placeholder="abc@gmail.com"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: 'initial' })
          }
          error={data.status === 'failure'}
          endDecorator={
            <Button
              variant="solid"
              color="primary"
              loading={data.status === 'loading'}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Subscribe
            </Button>
          }
        />
        {data.status === 'failure' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}

        {data.status === 'sent' && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            Thank you for subscribing!
          </FormHelperText>
        )}
      </FormControl>
    </form>
    </CssVarsProvider>
  );
}

export default NewsLetter;