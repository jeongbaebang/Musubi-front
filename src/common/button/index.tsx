import { ReactNode } from "react";
import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

import { Button, SaveIcon } from "src/style";
import { NextLinkComposed } from "src/lib/Link";

const CustomLoadingButton = <T extends LoadingButtonProps>(props: T) => {
  return (
    <LoadingButton {...props} loading loadingPosition="start" startIcon={<SaveIcon />}>
      {props.children}
    </LoadingButton>
  );
};

const CustomSubmitButton = <T extends LoadingButtonProps>(props: T) => {
  return (
    <Button {...props} type="submit">
      {props.children}
    </Button>
  );
};

const CustomLinkButton: React.FC<{ pathname: string; children: ReactNode }> = ({
  pathname,
  children,
}) => {
  return (
    <Button
      component={NextLinkComposed}
      aria-label={pathname}
      to={{
        pathname,
      }}
    >
      {children}
    </Button>
  );
};

export {
  CustomLoadingButton as LoadingButton,
  CustomSubmitButton as SubmitButton,
  CustomLinkButton as LinkButton,
};
