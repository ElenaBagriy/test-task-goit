import { useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filterSlice';
import { Header, Label, Text } from './Filter.styled';

export const Filter = () => {
    const dispatch = useDispatch();

    const onChange = (e) => {
        dispatch(setStatusFilter(e.target.value))
    };

    return <Header>
        <Label>
            <Text>Filter users by following status:</Text>
        <select onChange={onChange}>
            <option value='all'>ALL</option>
            <option value='follow'>FOLLOW</option>
            <option value='followings'>FOLLOWINGS</option>
            </select>
            </Label>
        </Header>
};