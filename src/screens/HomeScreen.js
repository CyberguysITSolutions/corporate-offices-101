import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Corporate Hills</Text>
        <Text style={styles.subtitle}>Your Smart Building Companion</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Building Information</Text>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Building Name:</Text>
          <Text style={styles.infoValue}>Corporate Hills</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Address:</Text>
          <Text style={styles.infoValue}>123 Business Park Drive</Text>
        </View>
        <View style={styles.infoCard}>
          <Text style={styles.infoLabel}>Office Hours:</Text>
          <Text style={styles.infoValue}>Monday - Friday: 8:00 AM - 6:00 PM</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionText}>Send Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>📅</Text>
          <Text style={styles.actionText}>Book Meeting Room</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionIcon}>💳</Text>
          <Text style={styles.actionText}>Make Payment</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Announcements</Text>
        <View style={styles.announcementCard}>
          <Text style={styles.announcementTitle}>Building Maintenance</Text>
          <Text style={styles.announcementText}>
            Scheduled maintenance on elevators this Saturday, 9:00 AM - 12:00 PM
          </Text>
          <Text style={styles.announcementDate}>Posted: Oct 25, 2025</Text>
        </View>
        <View style={styles.announcementCard}>
          <Text style={styles.announcementTitle}>Holiday Hours</Text>
          <Text style={styles.announcementText}>
            The building will be closed on Thanksgiving Day
          </Text>
          <Text style={styles.announcementDate}>Posted: Oct 20, 2025</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    opacity: 0.9,
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    textAlign: 'right',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  actionIcon: {
    fontSize: 24,
    marginRight: 15,
  },
  actionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  announcementCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: '#007AFF',
  },
  announcementTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  announcementText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  announcementDate: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default HomeScreen;
