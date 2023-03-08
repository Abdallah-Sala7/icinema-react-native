import { useNavigation } from '@react-navigation/native';
import {Image, StyleSheet, Touchable, TouchableOpacity, View} from 'react-native';
import assets from '../assets/assets';
import {COLORS} from '../constants';

const MultiStep = ({step = 0}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        style={styles.back}>
        <Image
          source={assets.back}
          style={{width: 12, height: 12, resizeMode: 'contain'}}
        />
      </TouchableOpacity>

      <View style={styles.stepContainer}>
        <View style={styles.line}>
          <View
            style={{
              ...styles.activeLine,
              width: `${(step / 3) * 100}%`,
            }}></View>
        </View>

        <View
          style={
            step === 0
              ? styles.active
              : step > 0
              ? styles.done
              : styles.inactive
          }></View>

        <View
          style={
            step === 1
              ? styles.active
              : step > 1
              ? styles.done
              : styles.inactive
          }></View>

        <View
          style={
            step === 2
              ? styles.active
              : step > 2
              ? styles.done
              : styles.inactive
          }></View>

        <View
          style={
            step === 3
              ? styles.active
              : step > 3
              ? styles.done
              : styles.inactive
          }></View>
      </View>
    </View>
  );
};

export default MultiStep;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 25,
  },

  back: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 12,
    left: 0,
    width: 26,
    height: 26,
    borderWidth: 1,
    borderColor: "#383838",
    backgroundColor: COLORS.gray,
    borderRadius: 4,
  },

  stepContainer: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 22,
    width: 160,
    overflow: 'hidden',
  },

  line: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: COLORS.gray,
  },

  activeLine: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 2,
    backgroundColor: COLORS.primary,
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
