import React, { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon, UserCircleIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '/', current: true },
  { name: 'Colleges', href: '/colleges', current: false },
  { name: 'Departments', href: '/departments', current: false },
  { name: 'Academic Materials', href: '/materials', current: false },
  { name: 'Courses', href: '/courses', current: false },
]

const careerNavigation = [
  { name: 'AI Interview Practice', href: '/ai-interview', current: false },
  { name: 'Mentorship', href: '/mentorship', current: false },
  { name: 'Skill Badges', href: '/skill-badges', current: false },
  { name: 'Job Board', href: '/job-board', current: false, badge: '5' },
  { name: 'Resume Builder', href: '/resume-builder', current: false },
]

const communityNavigation = [
  { name: 'Alumni Network', href: '/alumni-network', current: false, badge: 'New' },
  { name: 'Discussion Forums', href: '/discussion-forums', current: false },
]

const accountNavigation = [
  { name: 'Profile', href: '#', current: false },
  { name: 'Settings', href: '#', current: false },
  { name: 'Help & Support', href: '#', current: false },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navigation() {
  return null;
} 