import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const ContactList = () => {
  const contacts = [
    {
      uid: 1,
      name: 'Faran Mohammad',
      status: 'Learning React Native',
      imageUrl: 'https://avatars.githubusercontent.com/u/48853180?v=4',
    },
    {
      uid: 2,
      name: 'John Doe',
      status: 'Getting replaced with actual users',
      imageUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      uid: 3,
      name: 'Tony Stark',
      status: 'Making new suit',
      imageUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
    {
      uid: 4,
      name: 'Bruce Wayne',
      status: 'Sleeping during the day',
      imageUrl: 'https://randomuser.me/api/portraits/men/44.jpg',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}>
        {contacts.map(({uid, name, status, imageUrl}) => (
          <View key={uid} style={styles.userCard}>
            <Image
              source={{
                uri: imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{name}</Text>
              <Text style={styles.userStatus}>{status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },
  container: {
    paddingHorizontal: 16,
    marginBottom: 4,
  },
  userCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 3,
    backgroundColor: '#12B0E8',
    padding: 8,
    borderRadius: 14,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
  userStatus: {
    fontSize: 12,
  },
});
