import React from 'react';
import { string } from 'prop-types';

const EmptyState = ({ text }) => <span>{text}</span>;

EmptyState.propTypes = { text: string };
EmptyState.defaultProps = { text: 'Nothing to see here...' }
EmptyState.displayName = 'EmptyState';

export default EmptyState;
