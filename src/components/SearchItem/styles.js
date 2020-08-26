import {secondaryColor} from '../../styles/colors';

export const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderBottomColor: secondaryColor,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  locationWrapper: {
    marginLeft: 20,
  },
  primaryText: {
    color: secondaryColor,
    fontSize: 15,
  },
  secondaryText: {
    color: '#3B3B3F',
    fontSize: 13,
  },
};
