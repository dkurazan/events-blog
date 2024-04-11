import { useFetcher } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import classes from './NewsletterSignup.module.css';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const inputRef = useRef();

  const { data, state } = fetcher;

  useEffect(() => {
    if (state === 'idle' && data && data.message) {
      window.alert(data.message)
      inputRef.current.value = '';
    }
  }, [data, state])

  return (
    <fetcher.Form method="post" action='/newsletter' className={classes.newsletter}>
      <input
      ref={inputRef}
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;