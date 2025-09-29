import { Message, Task, User } from './types';

// These constants are no longer needed as the data will be loaded from Firebase.
// They are kept here for reference of the data structure but are not exported.

const INITIAL_MESSAGES: Message[] = [];

const INITIAL_TASKS: Record<User, Task[]> = {
  Alex: [
    { id: '1', text: 'Design the new UI', completed: true },
    { id: '2', text: 'Implement user switching', completed: true },
    { id: '3', text: 'Add task drawers', completed: false },
  ],
  Ben: [
    { id: '1', text: 'Review Alex\'s PR', completed: false },
    { id: '2', text: 'Prepare for sprint planning', completed: true },
    { id: '3', text: 'Fix bug #234', completed: false },
  ],
};
