import React, { Suspense } from 'react';
import { CircularProgress } from '@material-ui/core';
import { ErrorBoundary } from './ErrorBoundary';
import { Flex } from '../components/Flex';

export const FetchBoundary: React.FC = ({ children, ...props }) => {
  return (
    <Suspense
      {...props}
      fallback={
        <Flex height="50vh">
          <CircularProgress color="secondary" />
        </Flex>
      }
    >
      <ErrorBoundary>{children}</ErrorBoundary>
    </Suspense>
  );
};
