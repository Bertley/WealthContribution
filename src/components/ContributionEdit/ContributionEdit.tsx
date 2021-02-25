import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Formik, Form } from 'formik';
import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { contributionEditDismiss } from '../../actions/contribution';
import { isVisible } from '../../selectors/dialogs';
import { getSelected } from '../../selectors/contributions';
import { Dialogs } from '../../types/dialog';
import { State } from '../../types/store';
import Tfsa from '../Tfsa/Tfsa';
import Rrsp from '../Rrsp/Rrsp';
import classes from './ContributionEdit.module.scss';
import { Actions } from '../../types/action';
import { ContributionFormData } from '../../types/contribution';

const ContributionEdit = () => {
  const visible = useSelector<State, boolean>(state => isVisible(state, Dialogs.contributionEdit));
  const dispatch = useDispatch();
  const dismiss = () => dispatch(contributionEditDismiss());
  const contributionData = useSelector(getSelected)
  const contribution = useMemo(() => {
    if (!contributionData) {
      return null
    }
    return contributionData
  }, [contributionData])


  const onSubmit = (values: ContributionFormData) => {
    async function updateContribution() {
      // const { uuid } = values
      // if (contribution === null) return
      // const requestOptions = {
      //   method: 'PUT',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(values)
      // };
      // const response = await fetch('/contributions/' + uuid, requestOptions);
      // const contribution = await response.json();
      // const updatedValues: ContributionFormData = contribution
      // Change `values` to `updatedValue`
      dispatch({ type: Actions.CONTRIBUTION_UPDATE, payload: values })
      dismiss()
    }
    updateContribution();
  }

  if (!contribution) return null
  const initialValues: ContributionFormData = contribution

  return (
    <Dialog open={!!visible} onClose={dismiss}>
      <DialogTitle>Edit Contribution</DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {() => (
          <Form>
            <DialogContent classes={{ root: classes.content }}>
              <Rrsp />
              <Tfsa />
            </DialogContent>
            <DialogActions>
              <Button onClick={dismiss}>Cancel</Button>
              <Button type="submit">Accept</Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
};

export default ContributionEdit;
