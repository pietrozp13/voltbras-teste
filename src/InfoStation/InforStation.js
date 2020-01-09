import React from 'react'
import { Animated, Text } from 'react-native';

import { ItemContainer, Item } from './styles';

import ActionButtons from './ActionButtons/ActionButtons';
import InformationArea from './InformationArea/InformationArea';

export default function InforStation({ selectedStation, setSelectedStation }) {
    let isOpen = false
    const [isClose, setIsClose] = React.useState(true)
    const translateY = new Animated.Value(0);

    React.useEffect(()=>{
      setIsClose(true)
    },[selectedStation])

    function handleOpen () {
      Animated.timing(translateY, {
        toValue: isOpen ? 0 : -490,
        duration: 300,
        useNativeDriver: true,
      }).start();
      isOpen = !isOpen
    }

    function handleClose () {
      Animated.timing(translateY, {
        toValue: 280,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setIsClose(false)
        setSelectedStation(null)
      });
    }

    return (
      <ItemContainer style={{
          transform: [{
              translateY: translateY,
          }],
        }}
      >
        {selectedStation && isClose &&
          <Item>
              <ActionButtons
                translateY={translateY}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
              <InformationArea
                name={selectedStation.name}
                local={selectedStation.location.address.street}
                city={selectedStation.location.address.city}
                price={selectedStation.energyPrice}
                time={selectedStation.location.openHours}
                description={selectedStation.location.description}
                images={selectedStation.location.images}
              />
          </Item>
        }
      </ItemContainer>
    )
}