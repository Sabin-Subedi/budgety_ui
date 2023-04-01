import React from 'react'
import { Button, Paragraph, YStack } from '@my/ui'

function UserScreen() {
  return (
    <YStack f={1} jc="center" ai="center" space>
      <Paragraph ta="center" fow="800">
        User Profile
      </Paragraph>
    </YStack>
  )
}

export default UserScreen
