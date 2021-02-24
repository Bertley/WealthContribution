import React from 'react';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { useDispatch, useSelector } from 'react-redux';
import { getIsSelectedDisabled } from '../../selectors/contributions';
import { contributionEdit } from '../../actions/contribution';

const ContributionActions = () => {
    const disabled = useSelector(getIsSelectedDisabled);
    const dispatch = useDispatch();

    return (
        <CardActions>
            <Button disabled={disabled} onClick={() => dispatch(contributionEdit())}>Edit</Button>
            <Button disabled={disabled}>Cancel</Button>
        </CardActions>
    )
}

export default ContributionActions