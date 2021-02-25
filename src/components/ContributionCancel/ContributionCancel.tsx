import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { contributionCancelDismiss } from '../../actions/contribution';
import { isVisible } from '../../selectors/dialogs';
import { Dialogs } from '../../types/dialog';
import { State } from '../../types/store';
// import classes from './ContributionCancel.module.scss';

const ContributionCancel = () => {
  const visible = useSelector<State, boolean>(state => isVisible(state, Dialogs.contributionCancel));
  const dispatch = useDispatch();
  const dismiss = () => dispatch(contributionCancelDismiss());

  return (
    <Dialog open={!!visible} onClose={dismiss}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Are you sure you want to cancel this contribution?"}</DialogTitle>
      <DialogActions>
        <Button onClick={dismiss} color="primary">
          Disagree
      </Button>
        <Button onClick={dismiss} color="primary" autoFocus>
          Agree
      </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContributionCancel;
