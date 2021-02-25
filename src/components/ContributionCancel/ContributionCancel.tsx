import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import { contributionCancelDismiss } from '../../actions/contribution';
import { isVisible } from '../../selectors/dialogs';
import { Dialogs } from '../../types/dialog';
import { State } from '../../types/store';
import { getSelected } from '../../selectors/contributions';
import { Actions } from '../../types/action';
// import classes from './ContributionCancel.module.scss';

const ContributionCancel = () => {
  const visible = useSelector<State, boolean>(state => isVisible(state, Dialogs.contributionCancel));
  const dispatch = useDispatch();
  const dismiss = () => dispatch(contributionCancelDismiss());
  const contributionData = useSelector(getSelected)
  const contribution = useMemo(() => {
    if (contributionData === null) {
      return null
    }
    return contributionData
  }, [contributionData])

  if (contribution === null) return null

  const deleteContribution = () => {

    async function deleteContribution() {
      if (contribution === null) return
      const { uuid } = contribution
      // Uncomment use the api
      // const response = await fetch('/contributions/' + uuid, {
      //   method: 'DELETE',
      // })
      // const deleted = await response.json()
      // console.log(deleted)
      dispatch({ type: Actions.CONTRIBUTION_DELETE, payload: uuid })
      dismiss()
    }

    deleteContribution();
  }

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
        <Button onClick={deleteContribution} color="primary" autoFocus>
          Agree
      </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ContributionCancel;
