import React from 'react';
import classnames from 'classnames';
import { motion } from 'framer-motion';
import { Typography } from '@material-ui/core';
import { useStyles } from './styles';

const SingleBlock: React.FC<{
  className?: string;
  label: string;
  value: string;
  description?: string;
}> = ({
  className,
  label,
  value,
  description,
}) => {
  const classes = useStyles();

  return (
    <motion.div
      whileHover={{
			  scale: 1.05,
        filter: 'saturate(1.5)',
			  transition: { duration: 0.3 },
      }}
      className={classnames(className, classes.root)}
    >
      <Typography variant="body2" className="label">
        {label}
      </Typography>
      <div className="content">
        <Typography variant="h1">{value}</Typography>
        {!!description && (
        <Typography variant="caption" className="description">
          {description}
        </Typography>
        )}
      </div>
    </motion.div>
  );
};

export default SingleBlock;
