import {StyleSheet, View} from 'react-native';
import {COLORS} from '../constants';

const MultiStep = ({step = 0}) => {
  return (
    <View style={styles.container}>
      <View style={styles.line}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: 2,
            backgroundColor: COLORS.primary,
            width: `${(step / 3) * 100}%`,
          }}></View>
      </View>

      <View
        style={
          step === 0 ? styles.active : step > 0 ? styles.done : styles.inactive
        }></View>

      <View
        style={
          step === 1 ? styles.active : step > 1 ? styles.done : styles.inactive
        }></View>

      <View
        style={
          step === 2 ? styles.active : step > 2 ? styles.done : styles.inactive
        }></View>

      <View
        style={
          step === 3 ? styles.active : step > 3 ? styles.done : styles.inactive
        }></View>
    </View>
  );
};

export default MultiStep;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 22,
    width: '100%',
    marginVertical: 20,
    overflow: 'hidden'
  },

  line: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: COLORS.gray,
  },

  active: {
    width: 22,
    height: 22,
    borderRadius: 20,
    backgroundColor: COLORS.dark,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },

  done: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },

  inactive: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.gray,
  },
});
