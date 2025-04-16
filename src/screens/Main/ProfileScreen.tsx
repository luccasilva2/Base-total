import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useAuth } from '../contexts/AuthContext'; // Assumindo que você tem um contexto de autenticação

export default function ProfileScreen() {
  const { user } = useAuth(); // Obtenha os dados do usuário

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: user?.photoURL || 'https://i.imgur.com/Tch14Dn.png' }} 
        style={styles.avatar}
      />
      <Text style={styles.name}>{user?.displayName || 'Usuário'}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoTitle}>Informações do Perfil</Text>
        <View style={styles.infoItem}>
          <Text style={styles.infoLabel}>Cadastrado em:</Text>
          <Text style={styles.infoValue}>
            {user?.metadata?.creationTime || 'Data não disponível'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 15,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#333',
  },
  email: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  infoContainer: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
    color: '#444',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 15,
    color: '#666',
  },
  infoValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#333',
  },
});