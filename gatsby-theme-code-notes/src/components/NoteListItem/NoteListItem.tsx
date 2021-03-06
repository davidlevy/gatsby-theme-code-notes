/** @jsx jsx */
import { FunctionComponent } from 'react'
import { TagList } from '../TagList'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Heading, Flex, Box, Link, Text } from 'theme-ui'

interface NoteListItemProps {
  slug: string
  title: string
  emoji?: string
  dateModified: string
  modifiedTimestamp: string
  tags: string[]
  onClick?: () => void
}

export const NoteListItem: FunctionComponent<NoteListItemProps> = ({
  slug,
  title,
  dateModified,
  modifiedTimestamp,
  tags,
  emoji,
  onClick,
}) => {
  const noteEmoji = emoji ?? '🗒'
  return (
    <Box as="article">
      <Link as={GatsbyLink} to={slug} variant="noteListItem" onClick={onClick}>
        <Flex
          sx={{
            justifyContent: 'space-between',
            overflow: 'hidden',
          }}
        >
          <Heading as="h3" variant="noteListItem" sx={{ mr: '3' }}>
            <Box as="span" sx={{ position: 'absolute', left: 1 }}>
              {noteEmoji}
            </Box>
            {title}
          </Heading>
          <Flex sx={{ alignItems: 'center' }}>
            {tags && <TagList tags={tags} asLinks={false} />}
            {false && (
              <time dateTime={modifiedTimestamp}>
                <Text variant="dateModified" sx={{ ml: 2 }}>
                  {dateModified}
                </Text>
              </time>
            )}
          </Flex>
        </Flex>
      </Link>
    </Box>
  )
}
