import React, { Suspense } from 'react';
import { Flex } from '@chakra-ui/core';
import { CircularProgress } from '@material-ui/core';
import { ErrorBoundary } from './ErrorBoundary';

export const FetchBoundary: React.FC = ({ children, ...props }) => {
  return (
    <Suspense
      {...props}
      fallback={
        <Flex alignItems="center" justifyContent="center" height="50vh">
          <CircularProgress color="secondary" />
        </Flex>
      }
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </Suspense>
  );
};
