import {
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaPodcast, FaTelegramPlane } from 'react-icons/fa'
import { RiTwitterXLine } from 'react-icons/ri'

import {
  AnalyticsUrl,
  GeyserGithubUrl,
  GeyserHomepageUrl,
  GeyserPodcastUrl,
  GeyserPrivacyUrl,
  GeyserTelegramUrl,
  GeyserTermsAndConditionsURL,
  GeyserTwitterUrl,
} from '../../constants'
import { useMobileMode } from '../../utils'
import { Subscribe } from '../nav/Subscribe'
import { ButtonComponent } from '../ui'

interface IFooter {
  wrapperClassName?: string
}

export const AppFooter = ({ wrapperClassName }: IFooter) => {
  const { t } = useTranslation()
  const isMobile = useMobileMode()

  const { isOpen, onOpen, onClose } = useDisclosure()

  if (isMobile) {
    return null
  }

  return (
    <VStack
      position="static"
      bottom={0}
      className={wrapperClassName}
      width="100%"
      backgroundColor="neutral.100"
      alignItems="center"
      justifyContent="center"
      padding={isMobile ? '10px 10px' : '25px 32px'}
    >
      <Stack
        direction={isMobile ? 'column' : 'row'}
        width="100%"
        spacing="20px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Wrap
          spacing={isMobile ? '10px' : '24px'}
          justify={isMobile ? 'center' : ' flex-start'}
          color={'neutral.600'}
          flex={isMobile ? 0 : 1}
        >
          <Link href={GeyserTwitterUrl} isExternal>
            <IconButton
              size="sm"
              background={'none'}
              aria-label="Geyser on Twitter"
              icon={<RiTwitterXLine fontSize="20px" />}
            />
          </Link>

          <Link href={GeyserTelegramUrl} isExternal>
            <IconButton
              size="sm"
              background={'none'}
              aria-label="Geyser on Telegram"
              icon={<FaTelegramPlane fontSize="20px" />}
              marginLeft="5px"
            />
          </Link>

          <Link href={GeyserPodcastUrl} isExternal>
            <IconButton
              size="sm"
              background={'none'}
              aria-label="Geyser Podcasts"
              icon={<FaPodcast fontSize="20px" />}
              marginLeft="5px"
            />
          </Link>

          <Link href={GeyserGithubUrl} isExternal>
            <IconButton
              size="sm"
              background={'none'}
              aria-label="Geyser github"
              icon={<FaGithub fontSize="20px" />}
              marginLeft="5px"
            />
          </Link>

          <ButtonComponent size="sm" minWidth="150px" onClick={onOpen}>
            {t('Subscribe')}
          </ButtonComponent>
        </Wrap>

        <HStack
          spacing="24px"
          width={isMobile ? '100%' : 'auto'}
          justifyContent={isMobile ? 'center' : undefined}
          color="neutral.600"
          fontWeight={'medium'}
          fontSize="14px"
        >
          <Link href={GeyserHomepageUrl} isExternal>
            <Text>Geyser</Text>
          </Link>

          <Link href={GeyserHomepageUrl} isExternal>
            <Text>₿ = ❤</Text>
          </Link>

          <Link href={GeyserPrivacyUrl} isExternal>
            <Text>{t('Privacy')}</Text>
          </Link>

          <Link href={GeyserTermsAndConditionsURL} isExternal>
            <Text>T&amp;C</Text>
          </Link>

          <Link href={AnalyticsUrl} isExternal>
            <Text>{t('Analytics')}</Text>
          </Link>
        </HStack>
      </Stack>

      {/* <Text textAlign="center" color="grey">
				Made with ❤️ from around the 🌍 by <Link href="https://twitter.com/metamick14" isExternal>@metamick14</Link>, <Link href="https://twitter.com/steliosats" isExternal>@steliosats</Link> & <Link href="https://twitter.com/sajald77" isExternal>@sajald77</Link>
		</Text> */}
      <Subscribe {...{ isOpen, onClose }} style="button-modal" />
    </VStack>
  )
}
