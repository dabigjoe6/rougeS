import {secondaryColor} from '../../styles/colors';

export const styles = {
  container: {
    justifyContent: 'flex-start',
    paddingTop: 20,
  },
  locationWrapper: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 20,
  },
  routeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    position: 'relative',
    left: 50,
  },
  locationDropWrapper: {
    alignItems: 'center',
  },
  mapArea: {
    width: '100%',
    alignItems: 'center',
  },
  placeholderImg: {
    width: '100%',
    height: 300,
  },
  spottedArea: {
    width: '100%',
    paddingHorizontal: 15,
  },
  spottedText: {
    color: secondaryColor,
    alignSelf: 'flex-start',
  },
};
