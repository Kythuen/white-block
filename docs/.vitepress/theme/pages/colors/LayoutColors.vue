<template>
  <div
    w="full"
    p="10"
    rounded="md"
    ring="px $wb-color-border-dinky"
    bg="$wb-color-background"
    flex
    items="start"
    justify="center"
    gap="4"
  >
    <div
      w="full"
      max-w="90"
      h="60"
      p="5"
      ring="px $wb-color-border1-1"
      rounded="md"
      bg="$wb-color-card"
      flex="~ col"
      justify="between"
    >
      <div flex>
        <wb-popup trigger="click" arrow :content="111" :z-index="100">
          <div flex gap="2">
            <div flex>
              <div
                w="4"
                h="4"
                bg="$wb-color-text"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
              <div
                w="4"
                h="4"
                m="l--1.5"
                bg="$wb-color-text-active"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div flex>
              <div
                w="4"
                h="4"
                bg="$wb-color-card"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
              <div
                w="4"
                h="4"
                m="l--1.5"
                bg="$wb-color-layer"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
          </div>
          <template #content>
            <div>
              <div w="full" flex items="center" gap="2">
                <div w="20">text</div>
                <div flex="1">--wb-color-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="$wb-color-text"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">text:active</div>
                <div flex="1">--wb-color-text-active</div>
                <div
                  w="4"
                  h="4"
                  bg="$wb-color-text-active"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">bg</div>
                <div flex="1">--wb-color-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="$wb-color-card"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">bg:hover</div>
                <div flex="1">--wb-color-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="$wb-color-active-bg"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
            </div>
          </template>
        </wb-popup>
      </div>
      <div
        p="2"
        ring="px $wb-color-border1-1"
        rounded="md"
        bg="$wb-color-layer hover:$wb-color-active-bg"
        flex
        justify-center
        gap="2"
        cursor="pointer"
      >
        <wb-popup trigger="click" arrow :content="111" :z-index="100">
          <div flex gap="2">
            <div flex>
              <div
                w="4"
                h="4"
                bg="$wb-color-text-normal"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
              <div
                w="4"
                h="4"
                m="l--1.5"
                bg="$wb-color-text-active"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div flex>
              <div
                w="4"
                h="4"
                bg="$wb-color-card"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
              <div
                w="4"
                h="4"
                m="l--1.5"
                bg="$wb-color-active-bg"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
          </div>
          <template #content>
            <div>
              <div w="full" flex items="center" gap="2">
                <div w="20">text</div>
                <div flex="1">--wb-color-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="$wb-color-text-normal"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">text:active</div>
                <div flex="1">--wb-color-text-active</div>
                <div
                  w="4"
                  h="4"
                  bg="$wb-color-text-active"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">bg</div>
                <div flex="1">--wb-color-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="$wb-color-card"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
              <div w="full" flex items="center" gap="2">
                <div w="20">bg:hover</div>
                <div flex="1">--wb-color-text-normal</div>
                <div
                  w="4"
                  h="4"
                  bg="$wb-color-active-bg"
                  rounded="full"
                  ring="px $wb-color-border-soft"
                />
              </div>
            </div>
          </template>
        </wb-popup>
      </div>
    </div>
    <div flex="~ col" gap="2">
      <wb-popup trigger="click" arrow :content="111" :z-index="100">
        <div flex gap="2">
          <div flex>
            <div
              w="4"
              h="4"
              bg="$wb-color-text-normal"
              rounded="full"
              ring="px $wb-color-border-soft"
            />
            <div
              w="4"
              h="4"
              m="l--1.5"
              bg="$wb-color-text-active"
              rounded="full"
              ring="px $wb-color-border-soft"
            />
          </div>
          <div flex>
            <div
              w="4"
              h="4"
              bg="$wb-color-card"
              rounded="full"
              ring="px $wb-color-border-soft"
            />
            <div
              w="4"
              h="4"
              m="l--1.5"
              bg="$wb-color-active-bg"
              rounded="full"
              ring="px $wb-color-border-soft"
            />
          </div>
        </div>
        <template #content>
          <div>
            <div w="full" flex items="center" gap="2">
              <div w="20">text</div>
              <div flex="1">--wb-color-text-normal</div>
              <div
                w="4"
                h="4"
                bg="$wb-color-text-normal"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div w="full" flex items="center" gap="2">
              <div w="20">text:active</div>
              <div flex="1">--wb-color-text-active</div>
              <div
                w="4"
                h="4"
                bg="$wb-color-text-active"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div w="full" flex items="center" gap="2">
              <div w="20">bg</div>
              <div flex="1">--wb-color-text-normal</div>
              <div
                w="4"
                h="4"
                bg="$wb-color-card"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
            <div w="full" flex items="center" gap="2">
              <div w="20">bg:hover</div>
              <div flex="1">--wb-color-text-normal</div>
              <div
                w="4"
                h="4"
                bg="$wb-color-active-bg"
                rounded="full"
                ring="px $wb-color-border-soft"
              />
            </div>
          </div>
        </template>
      </wb-popup>
    </div>
  </div>
</template>
