/* eslint-disable prettier/prettier */
import {
    View,
    StatusBar,
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList
  } from 'react-native';
  import React, {useState, useEffect} from 'react';
  import { styles } from './styles';
  import {colors} from '../../../constants/colors';
  import WegoLogo from '../../../assets/svgs/icons/wegoLogo.svg';
  import database from '@react-native-firebase/database';
  export default function ViewUsers() {
    const usersReference = database().ref('users');
    let [Users, setUsers] = useState([]);


    const getUsers = () => {
        usersReference
        //   .orderByChild('contributor_id')
        //   .equalTo(user.id)
          .on('value', (snapshot) => {
            const UsersList = snapshot.val();
            if (UsersList) {
              const restructuredUsersList = Object.values(UsersList);

            console.log('payments',restructuredUsersList);
            setUsers(Users = restructuredUsersList);
            } else {
              return;
            }
          }
      );
    };
    useEffect(() => {
        getUsers();
      }, []);
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        {/* Header */}
        <View style={styles.row}>
            <WegoLogo  width={200} height={200} />
        </View>
        <View style={styles.cardPadding1}>
          <Text style={styles.summaryText}>User List</Text>
              {
                Users.length > 0 ?
                <FlatList
                data={Users}
                contentContainerStyle={styles.flatlist}
                vertical
                keyExtractor={(item) => item.id}
                renderItem={({item, index})=> {
                return  (
                  <TouchableOpacity  style={styles.repaymentRow1}>
                      <View style={styles.repaymentStatusRow}>
                          <Text style={styles.repaymentStausText}>Name</Text>
                          <Text style={styles.summarySmallText}>{item.first_name} {item.last_name}</Text>
                      </View>
                      <View style={styles.repaymentStatusRow}>
                        <Text style={styles.repaymentStausText}>Email Address</Text>
                        <Text style={styles.summarySmallText}>{item.email} </Text>
                      </View>
                      <View style={styles.repaymentStatusRow}>
                        <Text style={styles.repaymentStausText}>Role</Text>
                        <Text style={styles.summarySmallText}>{item.role}</Text>
                      </View>
                    </TouchableOpacity>
              );
                  }  }
              /> : <TouchableOpacity style={styles.nohistoryView}>
                <Text style={styles.nohistoryText}> You are not a member of this group hence you do not have a payment history with them</Text>
              </TouchableOpacity>

              }
            </View>
      </SafeAreaView>
    );
  }
