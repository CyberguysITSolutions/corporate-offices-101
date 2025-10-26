import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
} from 'react-native';

const MeetingRoomScreen = () => {
  const [selectedDate, setSelectedDate] = useState('Oct 26, 2025');
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingDetails, setBookingDetails] = useState({
    attendees: '',
    purpose: '',
    timeSlot: '',
  });

  const meetingRooms = [
    {
      id: 1,
      name: 'Conference Room A',
      capacity: 12,
      amenities: ['Projector', 'Whiteboard', 'Video Conferencing'],
      available: true,
      nextAvailable: '2:00 PM',
    },
    {
      id: 2,
      name: 'Conference Room B',
      capacity: 8,
      amenities: ['TV Screen', 'Whiteboard'],
      available: false,
      nextAvailable: '4:00 PM',
    },
    {
      id: 3,
      name: 'Small Meeting Room',
      capacity: 4,
      amenities: ['TV Screen'],
      available: true,
      nextAvailable: 'Now',
    },
    {
      id: 4,
      name: 'Board Room',
      capacity: 20,
      amenities: ['Projector', 'Whiteboard', 'Video Conferencing', 'Catering Service'],
      available: true,
      nextAvailable: 'Now',
    },
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
  ];

  const handleBookRoom = (room) => {
    setSelectedRoom(room);
    setShowBookingModal(true);
  };

  const handleConfirmBooking = () => {
    setShowBookingModal(false);
    setSelectedRoom(null);
    setBookingDetails({attendees: '', purpose: '', timeSlot: ''});
    // In a real app, this would send the booking to the backend
  };

  return (
    <View style={styles.container}>
      <View style={styles.dateSelector}>
        <Text style={styles.dateSelectorLabel}>Date:</Text>
        <TouchableOpacity style={styles.dateButton}>
          <Text style={styles.dateButtonText}>{selectedDate} 📅</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.roomList}>
        <Text style={styles.sectionTitle}>Available Meeting Rooms</Text>
        {meetingRooms.map((room) => (
          <View key={room.id} style={styles.roomCard}>
            <View style={styles.roomHeader}>
              <Text style={styles.roomName}>{room.name}</Text>
              <View
                style={[
                  styles.statusBadge,
                  room.available ? styles.availableBadge : styles.busyBadge,
                ]}>
                <Text
                  style={[
                    styles.statusText,
                    room.available ? styles.availableText : styles.busyText,
                  ]}>
                  {room.available ? 'Available' : 'Busy'}
                </Text>
              </View>
            </View>

            <View style={styles.roomDetails}>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>👥 Capacity:</Text>
                <Text style={styles.detailValue}>{room.capacity} people</Text>
              </View>
              <View style={styles.detailRow}>
                <Text style={styles.detailLabel}>⏰ Next Available:</Text>
                <Text style={styles.detailValue}>{room.nextAvailable}</Text>
              </View>
            </View>

            <View style={styles.amenitiesContainer}>
              <Text style={styles.amenitiesLabel}>Amenities:</Text>
              <View style={styles.amenitiesList}>
                {room.amenities.map((amenity, index) => (
                  <View key={index} style={styles.amenityTag}>
                    <Text style={styles.amenityText}>{amenity}</Text>
                  </View>
                ))}
              </View>
            </View>

            <TouchableOpacity
              style={[
                styles.bookButton,
                !room.available && styles.bookButtonDisabled,
              ]}
              onPress={() => handleBookRoom(room)}
              disabled={!room.available}>
              <Text style={styles.bookButtonText}>
                {room.available ? 'Book Now' : 'View Schedule'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}

        <View style={styles.myBookingsSection}>
          <Text style={styles.sectionTitle}>My Upcoming Bookings</Text>
          <View style={styles.bookingCard}>
            <Text style={styles.bookingRoom}>Conference Room A</Text>
            <Text style={styles.bookingTime}>Oct 27, 2025 - 10:00 AM - 11:00 AM</Text>
            <Text style={styles.bookingPurpose}>Weekly Team Meeting</Text>
            <TouchableOpacity style={styles.cancelButton}>
              <Text style={styles.cancelButtonText}>Cancel Booking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={showBookingModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowBookingModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              Book {selectedRoom?.name}
            </Text>

            <Text style={styles.inputLabel}>Select Time Slot</Text>
            <ScrollView style={styles.timeSlotContainer}>
              {timeSlots.map((slot, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.timeSlot,
                    bookingDetails.timeSlot === slot && styles.selectedTimeSlot,
                  ]}
                  onPress={() =>
                    setBookingDetails({...bookingDetails, timeSlot: slot})
                  }>
                  <Text
                    style={[
                      styles.timeSlotText,
                      bookingDetails.timeSlot === slot &&
                        styles.selectedTimeSlotText,
                    ]}>
                    {slot}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>

            <Text style={styles.inputLabel}>Number of Attendees</Text>
            <TextInput
              style={styles.input}
              placeholder="e.g., 8"
              value={bookingDetails.attendees}
              onChangeText={(text) =>
                setBookingDetails({...bookingDetails, attendees: text})
              }
              keyboardType="numeric"
            />

            <Text style={styles.inputLabel}>Meeting Purpose</Text>
            <TextInput
              style={[styles.input, styles.purposeInput]}
              placeholder="e.g., Team Meeting, Client Presentation"
              value={bookingDetails.purpose}
              onChangeText={(text) =>
                setBookingDetails({...bookingDetails, purpose: text})
              }
              multiline
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={() => setShowBookingModal(false)}>
                <Text style={styles.modalCancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalConfirmButton]}
                onPress={handleConfirmBooking}>
                <Text style={styles.modalConfirmButtonText}>Confirm Booking</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  dateSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  dateSelectorLabel: {
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
    color: '#333',
  },
  dateButton: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
  },
  dateButtonText: {
    fontSize: 16,
    color: '#333',
  },
  roomList: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    color: '#333',
  },
  roomCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  roomHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  roomName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  availableBadge: {
    backgroundColor: '#e8f5e9',
  },
  busyBadge: {
    backgroundColor: '#ffebee',
  },
  statusText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  availableText: {
    color: '#4caf50',
  },
  busyText: {
    color: '#f44336',
  },
  roomDetails: {
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  amenitiesContainer: {
    marginBottom: 15,
  },
  amenitiesLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  amenitiesList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  amenityTag: {
    backgroundColor: '#e3f2fd',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },
  amenityText: {
    fontSize: 12,
    color: '#1976d2',
  },
  bookButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonDisabled: {
    backgroundColor: '#ccc',
  },
  bookButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  myBookingsSection: {
    marginTop: 10,
    marginBottom: 20,
  },
  bookingCard: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  bookingRoom: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  bookingTime: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  bookingPurpose: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  cancelButton: {
    backgroundColor: '#ffebee',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#f44336',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
    marginTop: 10,
  },
  timeSlotContainer: {
    maxHeight: 150,
    marginBottom: 10,
  },
  timeSlot: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedTimeSlot: {
    backgroundColor: '#007AFF',
    borderColor: '#007AFF',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#333',
  },
  selectedTimeSlotText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 10,
  },
  purposeInput: {
    height: 80,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalCancelButton: {
    backgroundColor: '#f0f0f0',
  },
  modalCancelButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  modalConfirmButton: {
    backgroundColor: '#007AFF',
  },
  modalConfirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default MeetingRoomScreen;
