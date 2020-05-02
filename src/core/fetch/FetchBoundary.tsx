import React, { Suspense } from 'react';
import { Flex, Spinner } from '@chakra-ui/core';
import { ErrorBoundary } from './ErrorBoundary';

export const FetchBoundary: React.FC = ({ children, ...props }) => {
  return (
    <Suspense
      {...props}
      fallback={
        <Flex alignItems="center" justifyContent="center" height="50vh">
          <Spinner />
        </Flex>
      }
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </Suspense>
  );
};
