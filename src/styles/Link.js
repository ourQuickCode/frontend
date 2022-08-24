// ------------------------------ import libraries
import styled, { css } from 'styled-components'

import { Link as LinkRouter } from '@reach/router'
// ------------------------------ import variables
import { colors, spacing, shadows, border, fonts } from './Variables'

// ------------------------------------ COMPONENTS ------------------------------------//
export const LinkButton = styled(LinkRouter)`
    color: ${colors.titleColor};
`
